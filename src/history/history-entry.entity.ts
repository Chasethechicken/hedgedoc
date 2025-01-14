/*
 * SPDX-FileCopyrightText: 2021 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { Column, Entity, ManyToOne, UpdateDateColumn } from 'typeorm';

import { Note } from '../notes/note.entity';
import { User } from '../users/user.entity';

@Entity()
export class HistoryEntry {
  @ManyToOne((_) => User, (user) => user.historyEntries, {
    onDelete: 'CASCADE',
    primary: true,
  })
  user: User;

  @ManyToOne((_) => Note, (note) => note.historyEntries, {
    onDelete: 'CASCADE',
    primary: true,
  })
  note: Note;

  @Column()
  pinStatus: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Create a history entry
   * @param user the user the history entry is associated with
   * @param note the note the history entry is associated with
   * @param [pinStatus=false] if the history entry should be pinned
   */
  public static create(
    user: User,
    note: Note,
    pinStatus = false,
  ): Omit<HistoryEntry, 'updatedAt'> {
    const newHistoryEntry = new HistoryEntry();
    newHistoryEntry.user = user;
    newHistoryEntry.note = note;
    newHistoryEntry.pinStatus = pinStatus;
    return newHistoryEntry;
  }
}
