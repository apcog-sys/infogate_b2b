# two chron jobs has to be mutually exclusive of each other


import random
import json
import mysql.connector
import requests
import send_message_config as config

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
# Getting current date and time using now().

# importing datetime module for now()
import datetime
from datetime import timedelta


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


# using now() to get current time
current_time = datetime.datetime.now()
updated_time = current_time + timedelta(minutes=config.minutes_interval)
# Printing value of now.
print("Time now at greenwich meridian is:", current_time)
print("Time updated", updated_time)



# 2022-07-14 01:17:34.236712
sql= "SELECT * FROM infogate_b2b.inbox WHERE  delivery_stamp >= '"+str(current_time)+"' AND  delivery_stamp <= '"+str(updated_time)+"' LIMIT "+str(config.limit)    
#sql="SELECT * FROM infogate_b2b.inbox WHERE status='pending' ORDER BY id DESC LIMIT 10 ; " 
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
        if (req.json() == "message_received"):
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
            
            #if (mycursor.rowcount>0):
            #    sql_del="DELETE FROM infogate_b2b.inbox WHERE id=%s;"
            #    mycursor.execute(sql_del,(x[0],))
            #    mydb.commit()
            #    print(mycursor.rowcount, "was deleted.")
           


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
'''
{
contacts:[
        {
            priority:0,  # '0' means highest priority  and goes on like 1, 2, 3....
            type: email,
            address: xyz@gmail.com,
            ack_wait: false,
            required:true
            
        },
        {
            priority:1, 
            type: url,
            address: https://xyz.com,
            ack_wait: true,
            required:true  
        },
        {
            priority:2, 
            type: sms,
            address:919696858574,
            ack_wait: true,
            required:true  
        }  
    ]
}
'''
# {"contacts":[{"priority":0,"type":"email","address":"xyz@gmail.com","ack_wait":false,"required":true},{"priority":1,"type":"url","address":"https://xyz.com","ack_wait":true,"required":true},{"priority":2,"type":"sms","address":919696858574,"ack_wait":true,"required":true}]}