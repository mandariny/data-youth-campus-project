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
path = 'resource/csv_files'

for i in range(len(os.listdir(path))):
    #try:
        csv_file = pd.read_csv(path+"/"+os.listdir(path)[i])
        csv_file = csv_file.drop(columns=['crop_image'])
        csv_file = csv_file.values.tolist()
        #var=[];
        style = os.listdir(path)[i].split("_")[-1].split(".")[0]

        for i in range(50):
            csv_file[i].append(style);
            #csv_file[i] = tuple(csv_file[i])
            var=tuple(csv_file[i])

            sql = "INSERT INTO images (item, name, color, personal, style) VALUES (%s, %s, %s, %s, %s)"
            #val = ("pants", "88.jpg", "red", "warm")
            mycursor.execute(sql, var)

            mydb.commit()
        #print(csv_file);


        print(mycursor.rowcount, "record inserted.")
        #print(len(csv_file))
    #except:
    #    print("error")
    #    continue

# for i in range(len(os.listdir('resource/csv_files'))):
#     print(os.listdir('resource/csv_files')[i].split("_")[-1].split(".")[0])