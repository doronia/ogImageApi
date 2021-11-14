export default (req, res) => {
    console.log(req);
    return res.json({message: "Hello World"});
};

