# py -3 -m pip install Flask  (install libraries in python 3.9 syntax)

from distutils.log import error
import re
from flask import Flask, render_template, jsonify, request,redirect
#from flask_cors import CORS 
from flask import *
import json
import mysql.connector
import random
from woocommerce import API
import datetime 
from datetime import date, timedelta
wcapi = API(
    url='http://medicube.in',
    consumer_key='ck_7e68f56b11c6d6969d64d61014b5a0fd2fa6b121',
    consumer_secret='cs_2e1ff9374dfa2cbbe116dd387b2cfb95aeff8735',
    wpAPI= True,
    version= 'wc/v3',
    timeout=20
)



app = Flask(__name__)

@app.route('/test',methods=['POST'])
def test():
    response={"redirect": ""}
    #try:
    data = request.data     # the data obtained here is in byte format ie [ b'{"username":"sahique","password":"","role":"Admin"}' ]
    print(">>",data)        #  s = data.decode()   >>> code to decode byte string b'hello'
    #j_req_data = json.loads(data)
    return (jsonify("message_received")) 

@app.route('/')
def login_page():
    return (jsonify("message_received")) 



@app.route('/validate_login',methods=['POST'])
def login():
    response={"redirect": ""}
    #try:
    data = request.data     # the data obtained here is in byte format ie [ b'{"username":"sahique","password":"","role":"Admin"}' ]
    print(">>",data)        #  s = data.decode()   >>> code to decode byte string b'hello'
    j_req_data = json.loads(data)
    print(j_req_data['username'],j_req_data['password'],j_req_data['role'])    # the result is a Python dictionary:

    if (j_req_data['role']=="Admin"):
        sql = "SELECT * FROM medicube.super_admin WHERE user_name= %s  AND password= %s ;"
    elif(j_req_data['role']=="User"):
        sql = "SELECT * FROM medicube.customer_reg WHERE user_name= %s AND password= %s ;"

    elif(j_req_data['role']=="Finance_admin"):
        sql = "SELECT * FROM medicube.customer_reg WHERE user_name= %s AND password= %s ;"
    elif(j_req_data['role']=="Campaign_admin"):
        sql = "SELECT * FROM medicube.staff_reg WHERE user_name= %s AND password= %s ;"
    else:
        sql=""
    
    
    values=(j_req_data['username'],j_req_data['password'],)
    mycursor.execute(sql,values)
    myresult = mycursor.fetchall()
    print("myres:",myresult)
    if (len(myresult)==1):  
        new_session_id=random.randint(1,999999)
        print("session_id: ",new_session_id)
        sql_qry= "INSERT INTO medicube.session (session_id, user_id, user_name, user_role,session_status) VALUES (%s,%s,%s,%s,%s) " 
        values=(new_session_id, myresult[0][1], myresult[0][4], j_req_data['role'],"loggedin",)
        mycursor.execute(sql_qry,values)
        mydb.commit()
        print(mycursor.rowcount, "was inserted.")
        #return jsonify(final_data)
        response['redirect']= "/home_page"
    else:
        new_session_id=0
        response['redirect']= "/"
        #reponse="username or passwor incorrect, please try again"
    #except:
        #print("exception occured")
    return jsonify(response,new_session_id)


if __name__ == '__main__':
   app.run()
