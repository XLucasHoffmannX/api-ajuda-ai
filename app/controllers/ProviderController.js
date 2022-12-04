import Satisfaction from "../models/SatisfactionModel";

export const ProviderController = {
    get: async (req, res) => {

        let provider = "";
        if (req.query.provider !== null && req.query.provider !== '') {
            provider = new RegExp(req.query.provider, 'i')
        }

        try {
            const get = await Satisfaction.find({provider});

            return res.json(get);
        } catch (error) {
            return res.status(400).json({ msg: 'Não foi possivel achar!' })
        }
    },

    getClient: async (req, res)=>{
        const {
            client_id
        } = req.body;

        const clientTest = await Satisfaction.find({ client_id: client_id });

        if(clientTest.length <= 0 ) {
            return res.json('true');
        }

        return res.json('false');
    },

    post: async (req, res) => {
        try {
            const {
                client_id,
                provider,
                plan,
                rate
            } = req.body;

            if (!client_id) return res.status(400).json({ msg: "Erro, client_id não retornado!" });

            const newSatisfaction = new Satisfaction({
                client_id,
                provider,
                plan,
                rate
            })

            console.log(newSatisfaction);

            await newSatisfaction.save();

            res.json();
        } catch (error) { if (error) throw error }
    }
}