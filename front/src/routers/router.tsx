/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  AddressBox,
  Auth,
  ChangeUserInfo, // Test,
  DocsBox,
  Editor,
  EditorCreate,
  EditorEdit,
  EditorFinish,
  EditorInvite,
  GatherBox,
  Home,
  Intro, // DocsBox,
  SendBox,
  Setting,
  SignIn,
  SignUp,
} from "@/pages";
import ChangePassword from "@/pages/Home/Setting/ChangePassword/ChangePassword";

// import DocsBox from "@/pages/Home/DocsBox/DocsBox";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <SignIn />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "",
          element: <DocsBox />,
        },
        {
          path: "mybox/receive",
          element: <DocsBox />,
        },
        {
          path: "mybox/send",
          element: <SendBox />,
        },
        { path: "mybox/send/:idx", element: <GatherBox /> },
        {
          path: "address",
          element: <AddressBox />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "/home/setting/change",
          element: <ChangeUserInfo />,
        },
        {
          path: "/home/setting/password",
          element: <ChangePassword />,
        },
      ],
    },
    {
      path: "/editor",
      element: <Editor />,
      children: [
        {
          path: "",
          element: <EditorCreate />,
        },
        {
          path: "create",
          element: <EditorCreate />,
        },
        {
          path: "edit",
          element: <EditorEdit />,
        },
        {
          path: "invite",
          element: <EditorInvite />,
        },
        {
          path: "finish",
          element: <EditorFinish />,
        },
      ],
    },
    // {
    //   path: "/test",
    //   element: <Test />,
    // },
  ]!,
);

export default router;
