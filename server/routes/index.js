module.exports = app => {
    const userRoutes = require("./user.routes");
    app.use("/api/user", userRoutes)

    const commentRoutes = require("./comment.routes");
    app.use("/api/comment", commentRoutes)

    const feelingRoutes = require("./feeling.routes");
    app.use("/api/feeling", feelingRoutes)

    const postRoutes = require("./post.routes");
    app.use("/api/post", postRoutes)

    const authRoutes = require("./auth.routes");
    app.use("/api/auth", authRoutes)
}