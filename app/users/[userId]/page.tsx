import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPost"
import { Suspense } from "react"
import getAllUsers from "@/lib/getAllUsers"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Params = {
    params:{
        userId:string
    }
}

export async function generateMetadata({params:{userId}}:Params) :Promise<Metadata>{
  const userData:Promise<Users> = getUser(userId)
  const user:Users = await userData

  if(!user.name){
    return{
      title:"User Not Found"
    }
  }
  return {
    title:user.name,
    description: `this is the page of ${user.name}` 

  }
}

export default async function UserPage({params:{userId}}:Params) {

  const userData:Promise<Users> = getUser(userId)

  const userPostsData:Promise<Posts[]> = getUserPosts(userId)

  //const [user,userPosts] = await Promise.all([userData,userPostsData])

const user = await userData

if(!user.name) return notFound()

  return (
 <>
 <h2>{user.name}</h2>
 <br />
 <Suspense fallback={<h2>loading...</h2>}>
 <UserPosts promise={userPostsData}/>
 </Suspense>
 </>
  )
}

export async function generateStaticParams() {
  const userData:Promise<Users[]> = getAllUsers()
  const users = await userData

  return users.map(user => (
     {
       userId:user.id.toString()
     }
  ))
}