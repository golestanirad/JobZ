This is a my latest sample project to showcase Redux-Toolkit.

Redux-Toolkit is the latest version of Redux, created, backed, and strongly suggested by the Redux team.

It has many cool features, some of which are:

1) A lot lesser boilerplate code is required compared to Redux.

2) You don't need to do manual thunk setup as redux-toolkit comes with out-of-the-box createAsyncThunk which enables you to perform async operations in a very hastle-free way. It gives you three phases of "pending", "fulfilled" and "rejected" out of the box. But of course, you can still use the Thunk in its old fashion way as well if you wish.

3) THIS ONE IS MY FAVORITE => 
Redux Toolkit allows you to directly MUTATE the state in reducers!!! Yes, that's right! It uses the Immer library, which detects changes to a “draft state” and produces a brand new immutable state based on those changes. So instead of that kinda scary object-spreading operator like {...state, one:{...two, three: action.payload}}} you can easily go for 
state.one.three  = action.payload!!!!
Isn't that just awesome?!

And many other cool features that you can find on their website at:
https://redux-toolkit.js.org/
