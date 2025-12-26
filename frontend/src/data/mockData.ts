export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export const mockUsers: User[] = [
  { id: 1, name: 'Администратор', email: 'admin@oac.ru', role: 'admin' },
  { id: 2, name: 'Иван Петров', email: 'user@oac.ru', role: 'user' },
];

export const mockActions = [
  { id: 1, date: '2025-12-25 10:00', event: 'Вход в систему', status: 'Успешно' },
  { id: 2, date: '2025-12-25 11:30', event: 'Изменение роли', status: 'В процессе' },
];