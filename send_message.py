# two chron jobs has to be mutually exclusive of each other


from email import message
import random
import json
import mysql.connector
import requests
import send_message_config as config

print(config.minutes_interval, config.limit)
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="root"
)
mycursor = mydb.cursor()
roomid=0
#req= requests.get("http://127.0.0.1:5000/")
#print(req.json())

#while (1):

    
def send_mail(mail_id,msg):
    body = {
        "recevier" : mail_id,
        "message":msg
    } 
    req= requests.post("http://127.0.0.1:3000/sendmail",data=body)
    print(req.json())   #message_received
    print(type(req.json()))
    return req.json()

def send_sms(phone_no,msg):
    print(phone_no,msg)

sql="SELECT * FROM infogate_b2b.inbox WHERE status='pending' ORDER BY id DESC LIMIT "+str(config.limit)+" ;" 
mycursor.execute(sql)
result=mycursor.fetchall()
print(result)
# result= [id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, retries, status, createdAt, updatedAt]
           
for x in result:
    target="http://127.0.0.1:5000/"   #x[1]
    retries=x[7]; print(retries, x[6])
    if(retries>=0):
        sql2="SELECT * FROM infogate_b2b.msg_q WHERE id=%s;" 
        mycursor.execute(sql2,(x[6],))
        result2=mycursor.fetchall()
        message_body=result2
        print(result2)
        # send via URL
        if 'http' in x[1]:
            req= requests.post("http://127.0.0.1:5000/test",data=(result2[0][1]))
            print(req.json())   #message_received
            print(type(req.json()))
            response= req.json()
        
        
        # send via email
        elif '@' in x[1]:
            response=send_mail(x[1],result2[0][1])
        
        
        # send via 
        elif():
            response=send_sms(x[1],result2[0][1])

        

        if (response == "message_received"):
            print("success")
           # id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, retries, status 
           # id, inbox_id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, status    
            sql3="INSERT INTO infogate_b2b.archive (inbox_id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, status) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)" 
            values=(x[0],x[1],x[2],x[3],x[4],x[5],x[6],"success",)
            
        else:
            print("failed")
            sql3="UPDATE infogate_b2b.inbox SET retries= %s WHERE id= %s" 
            #UPDATE infogate_b2b.inbox SET retries='4' WHERE id='1'
            print("val::",(x[7]-1))
            values=(x[0],(x[7]-1),)
        try:
            mycursor.execute(sql3,values)
            mydb.commit()
            print(mycursor.rowcount, "was inserted.")
            '''
            if (mycursor.rowcount>0):
                sql_del="DELETE FROM infogate_b2b.inbox WHERE id=%s;"
                mycursor.execute(sql_del,(x[0],))
                mydb.commit()
                print(mycursor.rowcount, "was deleted.")
            '''
        except Exception as e:
            print(e)
    else:
        sql3="INSERT INTO infogate_b2b.archive (inbox_id, target_entity, room_id, in_stamp, out_stamp, delivery_stamp, msg_id, status) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)" 
        values=(x[0],x[1],x[2],x[3],x[4],x[5],x[6],"failed",)
        try:
            mycursor.execute(sql3,values)
            mydb.commit()
            print(mycursor.rowcount, "was inserted.")
        except Exception as e:
            print(e)

