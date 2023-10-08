export default function ({ store, redirect, route }) {
  const protectedRoutes = [
    "dashboard",
    "profile",
    "deposit",
    "withdraw",
    "notification",
    "internal",

    "admin",
  ];
  if (route.name == "blog-details" && store.state.selectedBlog == "") {
    return redirect("/blog");
  }
  if (store.state.auth.loggedIn) {
    const path = route.name;
    let redirectAdmin = "";

    if (route.name != null && store.state.auth.loggedIn) {
      if (
        route.name == "login" ||
        route.name == "signup"
        // path.includes("dashboard") &&
        // store.state.auth.user.status == "Staff"
      ) {
        redirectAdmin = "admin";
      }

      if (redirectAdmin == "admin") {
        return redirect("/dashboard");
      }
    }
  }

  if (!store.state.auth.loggedIn) {
    const path = route.name;
    if (route.name != null) {
      protectedRoutes.forEach((el) => {
        if (path.includes(el)) {
          return redirect("/login");
        }
      });
    }
  }
  if (store.state.auth.loggedIn && store.state.auth.user.status == "User") {
    const path = route.name;
    if (route.name == "signup") {
      return redirect("/dashboard");
    }
  }
}
