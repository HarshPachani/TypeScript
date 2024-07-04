export const getUsers = (req, res, next) => {
    const users = ['A', 'B', 'C'];
    res.json({
        users,
    });
};
