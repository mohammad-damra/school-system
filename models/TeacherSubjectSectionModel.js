const BaseModel = require("./BaseModel");
const TeacherSubjectSectionSchema = require("../schemas/TeacherSubjectSectionSchema");

class TeacherSubjectSectionModel extends BaseModel {
    constructor() {
        super(TeacherSubjectSectionSchema);
    }

    async index() {
        return TeacherSubjectSectionSchema.find()
            .populate("teacherId")
            .populate("subjectId")
            .populate({
                path: "sectionId",
                populate: {
                    path: "classId"
                }
            });
    }

    async getByTeacher(teacherId) {
        return this.schema.find({ teacherId })
            .populate("teacherId")
            .populate("sectionId")
            .populate("subjectId");
    }

}

module.exports = TeacherSubjectSectionModel;