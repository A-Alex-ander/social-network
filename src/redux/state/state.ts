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

export type StoreType = {
    _state:RootStateType
    _callSubscriber:()=>void
    addPost:()=>void
    updateNewPostText:(newText: string)=>void
    subscribe:(observer: () => void)=>void
    getState:()=>RootStateType
}

let store:StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("State changed")
    },
    addPost() {
        let newPost: PostType = {id: 3, message: store._state.profilePage.newPostText, likesCounts: '0'}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
                this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
            this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }


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

export default store