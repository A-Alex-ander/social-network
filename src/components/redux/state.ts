import {PostType} from "../profile/myPosts/post/Posts";
import {DialogItemType} from "../dialogs/dialogItem/DialogItem";
import {MessageType} from "../dialogs/message/Message";
import dialogs from "../dialogs/Dialogs";


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageBody: string
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


export type ActionType = AddPostActionType | UpdateNewPostTextActionType | NewMessageBodyACType | SendMessageACType
type AddPostActionType = { type: 'ADD-POST' }
type UpdateNewPostTextActionType = { type: 'UPDATE-NEW-POST-TEXT', newText: string }

type NewMessageBodyACType = ReturnType<typeof updateNewMessageAC>
type SendMessageACType = ReturnType<typeof sendMessageAC>

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
            ],
            newMessageBody: ''
        }

    },

    _callSubscriber(state: RootStateType) {
    },

    getState() {
        return this._state
    },
    subscribe(callBack: (state: RootStateType) => void) {
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
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }

    }
}


export const addPostAC = () => ({type: 'ADD-POST'} as const)


export const onPostChangeAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)

export const updateNewMessageAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const)

export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)

export default store;
