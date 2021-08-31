import mysql.connector
import pandas as pd
import numpy as np
import os

mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="+Wl-*oe;u7Mp",
        database="wearly"
)

mycursor = mydb.cursor()
path = '../resource/csv_files'

for i in range(len(os.listdir(path))):
        csv_file = pd.read_csv(path+"/"+os.listdir(path)[i])
    
        csv_file = csv_file.values.tolist()

        style = os.listdir(path)[i].split(".")[0].split("_")[1]

        for j in range(len(csv_file)):
            csv_file[j].append(style)
            csv_file[j]=tuple(csv_file[j])
            
        print(csv_file[0])


        
        sql = "INSERT INTO images (crop_image, item, name, color, personal, final_color, style) VALUES(%s, %s, %s, %s, %s,  %s, %s)"
        mycursor.executemany(sql, csv_file)

        mydb.commit()



        print(mycursor.rowcount, "record inserted.")

'''
csv_file = pd.read_csv(path+"/"+"feminine.csv")
print(csv_file.columns)'''