import * as fetch from 'isomorphic-fetch';

export default async <T = any> (uri: string, method: string = 'GET', body?: {}) => {

    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json'
    };

    if(token) {
        headers['Authorization'] `Bearer ${token}`
    }
    try{
        const res = await fetch(uri, {
            method, 
            headers,
            body: JSON.stringify(body)
        });
        if (res.ok){
            return <T>await res.json();
        }

    } catch (error) {
        console.log(error)
    }
}

export const logout = () => localStorage.clear();

export let AccessToken: string = localStorage.getItem("token") || null;
export let User: any = {
    userid: localStorage.getItem('userid') || null,
    role: localStorage.getItem('role') || null
};

export const json = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {

    let headers: any = {
        'Content-type': 'application/json'
    };

    if(AccessToken) {
        headers['Authorization'] = `Bearer ${AccessToken}`;
    }

    try{
        let result = await fetch(uri, {
            method,
            headers, 
            body: JSON.stringify(body)
        });
        if(result.ok){
            return<T>(await result.json());
        }else{
        return false;
    }
    }catch (e) {
        console.log(e);
        throw e;
    }    
};

export const SetAccessToken = (token: string, user: {userid: undefined, role: 'guest'}) => {
    AccessToken = token;
    User = user;

    localStorage.setItem('token', token);
    localStorage.setItem('userid', User.userid);
    localStorage.setItem('role', User.role);
};