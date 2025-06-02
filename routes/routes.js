const multer = require("multer");
const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/checkToken");
const checkPermission = require("../middlewares/checkPermission");
const RoleController = require("../controllers/RoleController");
const PermissionController = require("../controllers/PermissionController");
const RolePermissionController = require("../controllers/RolePermissionController");
const UserController = require("../controllers/UserController");
const StudentController = require("../controllers/StudentController");
const TeacherController = require("../controllers/TeacherController");
const LoginController = require("../controllers/LoginController");
const DashboardController = require("../controllers/DashboardController");
const ClassController = require("../controllers/ClassController");
const SectionController = require("../controllers/SectionController");
const AcademicYearController = require("../controllers/AcademicYearController");
const SemesterController = require("../controllers/SemesterController");
const SubjectController = require("../controllers/SubjectController");
const GradeController = require("../controllers/GradeController");
const AttendanceController = require("../controllers/AttendanceController");
const AssignmentController = require("../controllers/AssignmentController");
const SubmissionController = require("../controllers/SubmissionController");
const ManagerController = require("../controllers/ManagerController");
const TeacherSubjectSectionController = require("../controllers/TeacherSubjectSectionController");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads"); // تأكد أن هذا المجلد موجود
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



router.post("/roles/create/", checkToken, checkPermission("create role"), RoleController.create);
router.get("/roles/:id/", checkToken, checkPermission("get role"), RoleController.view);
router.get("/roles/", checkToken, checkPermission("get all roles"), RoleController.index);
router.put("/roles/update/:id", checkToken, checkPermission("update role"), RoleController.update);
router.delete("/roles/delete/:id", checkToken, checkPermission("delete role"), RoleController.delete);

router.post("/permissions/create/", checkToken, checkPermission("create permission"), PermissionController.create);
router.get("/permissions/:id/", checkToken, checkPermission("get permission"), PermissionController.view);
router.get("/permissions/", checkToken, checkPermission("get all permissions"), PermissionController.index);
router.put("/permissions/update/:id", checkToken, checkPermission("update permission"), PermissionController.update);
router.delete("/permissions/delete/:id", checkToken, checkPermission("delete permission"), PermissionController.delete);

router.post("/rolepermissions/create/", checkToken, checkPermission("create rolePermission"), RolePermissionController.create);
router.get("/rolepermissions/:id/", checkToken, checkPermission("get rolePermission"), RolePermissionController.view);
router.get("/rolepermissions/", checkToken, checkPermission("get all rolePermissions"), RolePermissionController.index);
router.put("/rolepermissions/update/:id", checkToken, checkPermission("update rolePermission"), RolePermissionController.update);
router.delete("/rolepermissions/delete/:id", checkToken, checkPermission("delete rolePermission"), RolePermissionController.delete);

router.get("/users/:id/", checkToken, checkPermission("get user"), UserController.view);
router.get("/users/", checkToken, checkPermission("get all users"), UserController.index);

router.post("/students/create/", checkToken, checkPermission("create student"), StudentController.create);
router.get("/students/:id/", checkToken, checkPermission("get student"), StudentController.view);
router.get("/student/me/", checkToken, checkPermission("getMe student"), StudentController.getMe);
router.get("/students/me/me", checkToken, checkPermission("get me student"), StudentController.me);
router.get("/students/count/all", checkToken, checkPermission("count students"), StudentController.count);
router.get("/students/", checkToken, checkPermission("get all students"), StudentController.index);
router.put("/students/update/:id", checkToken, checkPermission("update student"), StudentController.update);
router.delete("/students/delete/:id", checkToken, checkPermission("delete student"), StudentController.delete);

router.post("/teachers/create/", checkToken, checkPermission("create teacher"), TeacherController.create);
router.get("/teachers/:id/", checkToken, checkPermission("get teacher"), TeacherController.view);
router.get("/teacher/me/", checkToken, checkPermission("getMe teacher"), TeacherController.getMe);
router.get("/teachers/", checkToken, checkPermission("get all teachers"), TeacherController.index);
router.put("/teachers/update/:id", checkToken, checkPermission("update teacher"), TeacherController.update);
router.put("/teacher/update/me", checkToken, checkPermission("updateMe teacher"), TeacherController.updateMe);
router.delete("/teachers/delete/:id", checkToken, checkPermission("delete teacher"), TeacherController.delete);

router.post("/classes/create/", checkToken, checkPermission("create class"), ClassController.create);
router.get("/classes/:id/", checkToken, checkPermission("get class"), ClassController.view);
router.get("/classes/", checkToken, checkPermission("get all classes"), ClassController.index);
router.put("/classes/update/:id", checkToken, checkPermission("update class"), ClassController.update);
router.delete("/classes/delete/:id", checkToken, checkPermission("delete class"), ClassController.delete);

router.post("/sections/create/", checkToken, checkPermission("create section"), SectionController.create);
router.get("/sections/:id/", checkToken, checkPermission("get section"), SectionController.view);
router.get('/sections/withSubjects/:id', checkToken, checkPermission("view sections"), SectionController.viewWithSubjects);
router.get("/sections/", checkToken, checkPermission("get all sections"), SectionController.index);
router.put("/sections/update/:id", checkToken, checkPermission("update section"), SectionController.update);
router.delete("/sections/delete/:id", checkToken, checkPermission("delete section"), SectionController.delete);

router.post("/academicYears/create/", checkToken, checkPermission("create academic year"), AcademicYearController.create);
router.get("/academicYears/:id/", checkToken, checkPermission("get academic year"), AcademicYearController.view);
router.get("/academicYears/", checkToken, checkPermission("get all academic year"), AcademicYearController.index);
router.put("/academicYears/update/:id", checkToken, checkPermission("update academic year"), AcademicYearController.update);
router.delete("/academicYears/delete/:id", checkToken, checkPermission("delete academic year"), AcademicYearController.delete);

router.post("/semesters/create/", checkToken, checkPermission("create semester"), SemesterController.create);
router.get("/semesters/:id/", checkToken, checkPermission("get semester"), SemesterController.view);
router.get("/semesters/", checkToken, checkPermission("get all semesters"), SemesterController.index);
router.put("/semesters/update/:id", checkToken, checkPermission("update semester"), SemesterController.update);
router.delete("/semesters/delete/:id", checkToken, checkPermission("delete semester"), SemesterController.delete);

router.post("/subjects/create/", checkToken, checkPermission("create subject"), SubjectController.create);
router.get("/subjects/:id/", checkToken, checkPermission("get subject"), SubjectController.view);
router.get("/subjects/", checkToken, checkPermission("get all subjects"), SubjectController.index);
router.put("/subjects/update/:id", checkToken, checkPermission("update subject"), SubjectController.update);
router.delete("/subjects/delete/:id", checkToken, checkPermission("delete subject"), SubjectController.delete);

router.post("/grades/create/", checkToken, checkPermission("create grade"), GradeController.create);
router.get("/grades/:id/", checkToken, checkPermission("get grade"), GradeController.view);
router.get("/grades/", checkToken, checkPermission("get all grades"), GradeController.index);
router.put("/grades/update/:id", checkToken, checkPermission("update grade"), GradeController.update);
router.delete("/grades/delete/:id", checkToken, checkPermission("delete grade"), GradeController.delete);

router.post("/attendances/create/", checkToken, checkPermission("create attendance"), AttendanceController.create);
router.get("/attendances/:id/", checkToken, checkPermission("get attendance"), AttendanceController.view);
router.get("/attendances/", checkToken, checkPermission("get all attendances"), AttendanceController.index);
router.put("/attendances/update/:id", checkToken, checkPermission("update attendance"), AttendanceController.update);
router.delete("/attendances/delete/:id", checkToken, checkPermission("delete attendance"), AttendanceController.delete);

router.post("/assignments/create/", checkToken, checkPermission("create assignment"), AssignmentController.create);
router.get("/assignments/:id/", checkToken, checkPermission("get assignment"), AssignmentController.view);
router.get("/assignments/", checkToken, checkPermission("get all assignments"), AssignmentController.index);
router.put("/assignments/update/:id", checkToken, checkPermission("update assignment"), AssignmentController.update);
router.delete("/assignments/delete/:id", checkToken, checkPermission("delete assignment"), AssignmentController.delete);

router.post("/submissions/create/", checkToken, checkPermission("create submission"), SubmissionController.create);
router.get("/submissions/:id/", checkToken, checkPermission("get submission"), SubmissionController.view);
router.get("/submissions/", checkToken, checkPermission("get all submissions"), SubmissionController.index);
router.put("/submissions/update/:id", checkToken, checkPermission("update submission"), SubmissionController.update);
router.delete("/submissions/delete/:id", checkToken, checkPermission("delete submission"), SubmissionController.delete);


router.post("/managers/create/", checkToken, checkPermission("create manager"), ManagerController.create);
router.get("/managers/:id/", checkToken, checkPermission("get manager"), ManagerController.view);
router.get("/managers/", checkToken, checkPermission("get all managers"), ManagerController.index);
router.put("/managers/update/:id", checkToken, checkPermission("update manager"), ManagerController.update);
router.delete("/managers/delete/:id", checkToken, checkPermission("delete manager"), ManagerController.delete);

router.post("/teacherSubjectSections/create/", checkToken, checkPermission("create teacherSubjectSection"), TeacherSubjectSectionController.create);
router.get("/teacherSubjectSections/mine/mine", checkToken, checkPermission("mine teacherSubjectSection"), TeacherSubjectSectionController.mySections);
router.get("/teacherSubjectSections/:id/", checkToken, checkPermission("get teacherSubjectSection"), TeacherSubjectSectionController.view);
router.get("/teacherSubjectSections/", checkToken, checkPermission("get all teacherSubjectSections"), TeacherSubjectSectionController.index);
router.put("/teacherSubjectSections/update/:id", checkToken, checkPermission("update teacherSubjectSection"), TeacherSubjectSectionController.update);
router.delete("/teacherSubjectSections/delete/:id", checkToken, checkPermission("delete teacherSubjectSection"), TeacherSubjectSectionController.delete);

router.post("/submissions/submit", checkToken, checkPermission("create submission"),  upload.single("file"), SubmissionController.submit);
router.post("/submissions/create-with-file", checkToken, checkPermission("create submission with file"), upload.single("answer"), SubmissionController.createWithFile);
router.get("/submissions/assignment/:assignmentId", checkToken, checkPermission("get submission"),  SubmissionController.getByAssignment);
router.get("/submissions/my/", checkToken, checkPermission("get submission me"), SubmissionController.getMySubmissions);

router.get("/assignments/my/", checkToken, checkPermission("get assignment me"), AssignmentController.getForMySection);

router.get("/dashboard/", checkToken, DashboardController.view);
router.post("/login/", LoginController.login);

module.exports = router;