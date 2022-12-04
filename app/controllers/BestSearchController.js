export async function getResult(req, res) {
    try {
        let { plan, support, devices } = req.body;

        plan = Number(plan);
        support = Number(support);
        devices = Number(devices);

        if (plan == support) {
            if (devices == support) {
                if (support === 0) {
                    return res.json({ msg: 'c' });
                }
                if (support === 1) {
                    return res.json({ msg: 'b' });
                }
                if (support === 2) {
                    return res.json({ msg: 'a' });
                }
            }
        } else if (plan === 1 && support === 0) {
            return res.json({ msg: 'c' });
        } else if (plan === 1 && support === 2) {
            return res.json({ msg: 'b' });
        } else if (plan === 0) {
            return res.json({ msg: 'b' });
        } else if (plan === 2) {
            return res.json({ msg: 'a' });
        } else {
            return res.json({ msg: 'a' });
        }
        
        return res.json({ msg: 'a' });

    }
    catch (error) { if (error) throw error }
}