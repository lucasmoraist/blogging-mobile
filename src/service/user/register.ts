import { TeacherMock } from "../../mocks/teacher";
import { UserMock } from "../../mocks/user";

type Data = {
    name: string;
    schoolSubject: string;
    username: string;
    password: string;
    role: string;
}

export function AuthRegister({ name, schoolSubject, username, password, role }: Data) {
    const users = UserMock;
    const userExists = users.find(user => user.username === username);

    const teacher = TeacherMock;
    
    if (userExists) {
        throw new Error('Usuário já cadastrado');
    }

    teacher.push({
        name,
        school_subject: schoolSubject,
        user_id: users.length + 1
    });

    users.push({
        id: users.length + 1,
        username,
        password,
        role
    });

    return true;
}