import {PostType} from "../../components/profile/myPosts/post/Posts";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type MessagePageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagePageType

}



let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you', likesCounts: '10'},
            {id: 2, message: 'It`s my first post', likesCounts: '20'},
        ],
        newPostText: "it-kamasutra"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alexandr'},
            {id: 2, name: 'Vladislav'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Efim'},
            {id: 5, name: 'John'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you ?'},
            {id: 3, message: 'Good'},
            {id: 4, message: 'Great'},
            {id: 5, message: 'Badly'}
        ]
    }
}

let rerenderEntireTree = ()=> {
    console.log("State changed")
}

export let addPost = () => {
    let newPost: PostType = {id: 3, message: state.profilePage.newPostText, likesCounts: '0'}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}

export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer:()=>void)=>{
rerenderEntireTree = observer
}

//
// let posts: PostType[] = [
//     {id: 1, message: 'Hi how are you', likesCounts: '10'},
//     {id: 2, message: 'It`s my first post', likesCounts: '20'},
// ]
//
// let dialogs: DialogType[] = [
//     {id: 1, name: 'Alexandr'},
//     {id: 2, name: 'Vladislav'},
//     {id: 3, name: 'Dima'},
//     {id: 4, name: 'Efim'},
//     {id: 5, name: 'John'},
// ]
// let message: MessageType[] = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you ?'},
//     {id: 3, message: 'Good'},
//     {id: 4, message: 'Great'},
//     {id: 5, message: 'Badly'},
// ]


export default state