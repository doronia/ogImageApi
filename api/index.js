export default (req, res) => {
    console.log(req);
    console.log(res);
    return res.json({message: "Hello World"});
};

