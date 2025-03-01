export const verfiyinvtmanger = (req, res, next) => {
    if (!req.user.isfinancialmanger) {
        return res.status(403).json({ success: false, message: 'Access denied. Only manger are allowed.' });
    }
    next();
};