import database from "../models";

export class PersonController {
    static async getAllPeople(req, res) {
        try {
            const result = await database.Person.findAll();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
