import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import UserAvatar from "./UserAvatar";
import Posts from "./Posts";

const GET_USER = gql`
    query User($id: ID!) {
        user(id: $id) {
            name
            email
            postsCount
            posts { 
                id
                title
            }
        }
    }
`;

function User({ user }) {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: user.id }  
    });
    
    if (loading) return "loading...";
    if (error) return `Error ${error.message}`;
    
    return (
        <>
            <div className="flex flex-wrap my-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
            </div>

            <div className="flex flex-wrap items-start mb-4">
                <div className="lg:w-1/4 w-full text-center rounded">
                    <UserAvatar user={data.user} />
                </div>

                <div className="pos-4 flex-1 w-full">
                    <Posts posts={data.user.posts} user={user} />
                </div>
            </div>
        </>
    )
}

export default User;