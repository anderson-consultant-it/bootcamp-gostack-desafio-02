import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
    async store(req, res, next) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                street: Yup.string().required(),
                street_number: Yup.number().required(),
                address_complement: Yup.string(),
                city: Yup.string().required(),
                state: Yup.string().required(),
                zip_code: Yup.string().required(),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation failed' });
            }

            const recipient = await Recipient.create(req.body);
            return res.json(recipient);
        } catch (error) {
            return next();
        }
    }
}

export default new RecipientController();
