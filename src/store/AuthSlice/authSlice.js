import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

//Register New User
export const registerNewUser = createAsyncThunk(
  "authSlice/registerNewUser",
  async (data) => {
    try {
      const registeredUser = await axios.post(
        `${import.meta.env.VITE_API_URL}/freelancers/register`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return registeredUser.data;
    } catch (error) {
      await swal({
        title: "faild to register",
        icon: "error",
      });

      const errors = error.response.data.errors;

      const reduceErrors = errors.reduce((acc, prevItem) => {
        acc[prevItem.path] = prevItem.msg;
        return acc;
      }, {});
      return {
        errors: reduceErrors,
      };
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuth:false,
    isLoading: false,
    errors: {},
  },
  reducers: {
    cleanUpRegister(state){
        state.isLoading = false,
        state.errors = {}
    }
  },
  extraReducers: (builder) => {
    //RegisterNewUser
    builder.addCase(registerNewUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerNewUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;

      if (payload.errors) {
        state.errors = payload.errors;
      } else {
        swal({
          title: "Success",
          text: payload.message,
          icon: "success",
        }).then((value) => {
          if (value) {
            window.location = "/login";
          }
        });
      }
    });
    builder.addCase(registerNewUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log("rejected", payload);
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
