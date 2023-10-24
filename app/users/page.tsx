import React from 'react'
import type { Metadata } from "next";
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata:Metadata = {
    title:"users",
}


export default async function UsersPage() {
    const usersData:Promise<Users[]> = getAllUsers() 

    const users = await usersData

    console.log("hello World")

    const content = (
        <section>
            <h2>
                <Link href={"/"}>Back to home</Link>
            </h2>
            <br />
            {users.map(user=>{
                return (
                    <>
                <p key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
                <br />
                    </>
                )
        })}
        </section>
    )
  return  content 
}


