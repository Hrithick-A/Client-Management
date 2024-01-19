package com.fs.smp.Entity;

import com.mongodb.client.model.Collation;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "client")
public class Client {

    @Id
    public String id;
    private String cname;

    public Client(String id, String name, String address, String mail, String mobile) {
        this.id = id;
        this.cname = cname;
        this.address = address;
        this.mail = mail;
        this.mobile = mobile;
    }
    public Client(){

    }

    public String get_Id() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return cname;
    }

    public void setName(String name) {
        this.cname = cname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }


    private String address;
    private String mail;
    private String mobile;

    @Override
    public String toString() {
        return "Client{" +
                "id='" + id + '\'' +
                ", cname='" + cname + '\'' +
                ", address='" + address + '\'' +
                ", mail='" + mail + '\'' +
                ", mobile='" + mobile + '\'' +
                '}';
    }


    public String getid() {return id;
    }
}

