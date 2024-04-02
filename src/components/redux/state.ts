import {PostType} from "../profile/myPosts/post/Posts";
import {DialogItemType} from "../dialogs/dialogItem/DialogItem";
import {MessageType} from "../dialogs/message/Message";


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (callBack: () => void) => void
    dispatch: (action: ActionType) => void

}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCounts: 11},
                {id: 2, message: 'It`s my first post', likesCounts: 12}
            ],
            newPostText: 'newPostText'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alexander'},
                {id: 2, name: 'Vladislav'},
                {id: 3, name: 'Nikita'},
                {id: 4, name: 'Efim'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: "How are you ?"},
                {id: 3, message: 'Good'},
                {id: 4, message: 'Great'}
            ]
        }

    },

    _callSubscriber(state: RootStateType) {
    },

    getState() {
        return this._state
    },
    subscribe(callBack: (state:RootStateType) => void) {
        this._callSubscriber = callBack
    },


    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 3, message: this._state.profilePage.newPostText, likesCounts: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostAC=() => ({type:'ADD-POST'} as const)


export const onPostChangeAC=(newText:string) =>({type:'UPDATE-NEW-POST-TEXT',newText:newText} as const)

export type ActionType = AddPostActionType | UpdateNewPostTextActionType
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}




export default store;
