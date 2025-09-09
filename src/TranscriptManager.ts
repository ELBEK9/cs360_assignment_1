export type StudentID = number
export type Student = {studentID: number, studentName: string}
export type Course = string
export type CourseGrade = {course:Course, grade:number}
export type Transcript = {student:Student, grades:CourseGrade[]}

let transcripts: Transcript[]=[]
let students: Student[] = []

// initializes the database with 4 students,
// each with an empty transcript (handy for debugging)
export function initialize(){
    addStudent("Sardor")
    addStudent("Jasur")
    addStudent("Ulug")
    addStudent("Nigora")

    students.forEach(student => {}){
        transcripts.push({
            student: student,
            grades: []
        })
    }
}

// returns a list of all the transcripts.
// handy for debugging
export function getAll(){

}

// creates an empty transcript for a student with this name,
// and returns a fresh ID number
export function addStudent(name:string) : StudentID{
    let newStudentId = students.length+1;
    let newStudent: Student = {
        studentID: newStudentId,
        studentName:name
    }

    return newStudentId
}

// gets transcript for given ID.  Returns undefined if missing
export function getTranscript(studentID:number) : Transcript{
    throw "Not implemented";
}

// returns list of studentIDs matching a given name
export function getStudentIDs(studentName:string) : StudentID[]{
    throw "Not implemented";
}

// deletes student with the given ID from the database.
// throws exception if no such student.
export function deleteStudent(studentID:StudentID){
    throw "Not implemented";
}

// adds a grade for the given student in the given course.
// throws error if student already has a grade in that course.
export function addGrade(studentID: StudentID, course: Course, grade: number){
    throw "Not implemented";
}

// returns the grade for the given student in the given course
// throws an error if no such student or no such grade
export function getGrade(studentID:StudentID, course:Course) : number{
    throw "Not implemented";
}