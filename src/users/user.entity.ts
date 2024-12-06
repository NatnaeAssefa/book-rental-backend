import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Optional: specify table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' }) // roles: 'user', 'owner', 'admin'
  role: string;
}
