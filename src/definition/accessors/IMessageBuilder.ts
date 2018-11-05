import { IMessage, IMessageAttachment } from '../messages';
import { RocketChatAssociationModel } from '../metadata';
import { IRoom } from '../rooms';
import { IUser } from '../users';

/**
 * Interface for building out a message.
 * Please note, that a room and sender must be associated otherwise you will NOT
 * be able to successfully save the message object.
 */
export interface IMessageBuilder {
    kind: RocketChatAssociationModel.MESSAGE;

    /**
     * Provides a convient way to set the data for the message.
     * Note: Providing an "id" field here will be ignored.
     *
     * @param message the message data to set
     */
    setData(message: IMessage): IMessageBuilder;

    /**
     * Sets the room where this message should be sent to.
     *
     * @param room the room where to send
     */
    setRoom(room: IRoom): IMessageBuilder;

    /**
     * Gets the room where this message was sent to.
     */
    getRoom(): IRoom;

    /**
     * Sets the sender of this message.
     *
     * @param sender the user sending the message
     */
    setSender(sender: IUser): IMessageBuilder;

    /**
     * Gets the User which sent the message.
     */
    getSender(): IUser;

    /**
     * Sets the text of the message.
     *
     * @param text the actual text
     */
    setText(text: string): IMessageBuilder;

    /**
     * Gets the message text.
     */
    getText(): string;

    /**
     * Sets the emoji to use for the avatar, this overwrites the current avatar
     * whether it be the user's or the avatar url provided.
     *
     * @param emoji the emoji code
     */
    setEmojiAvatar(emoji: string): IMessageBuilder;

    /**
     * Gets the emoji used for the avatar.
     */
    getEmojiAvatar(): string;

    /**
     * Sets the url which to display for the avatar, this overwrites the current
     * avatar whether it be the user's or an emoji one.
     *
     * @param avatarUrl image url to use as the avatar
     */
    setAvatarUrl(avatarUrl: string): IMessageBuilder;

    /**
     * Gets the url used for the avatar.
     */
    getAvatarUrl(): string;

    /**
     * Sets the display text of the sender's username that is visible.
     *
     * @param alias the username alias to display
     */
    setUsernameAlias(alias: string): IMessageBuilder;

    /**
     * Gets the display text of the sender's username that is visible.
     */
    getUsernameAlias(): string;

    /**
     * Adds one attachment to the message's list of attachments, this will not
     * overwrite any existing ones but just adds.
     *
     * @param attachment the attachment to add
     */
    addAttachment(attachment: IMessageAttachment): IMessageBuilder;

    /**
     * Sets the attachments for the message, replacing and destroying all of the current attachments.
     *
     * @param attachments array of the attachments
     */
    setAttachments(attachments: Array<IMessageAttachment>): IMessageBuilder;

    /**
     * Gets the attachments array for the message
     */
    getAttachments(): Array<IMessageAttachment>;

    /**
     * Replaces an attachment at the given position (index).
     * If there is no attachment at that position, there will be an error thrown.
     *
     * @param position the index of the attachment to replace
     * @param attachment the attachment to replace with
     */
    replaceAttachment(position: number, attachment: IMessageAttachment): IMessageBuilder;

    /**
     * Removes an attachment at the given position (index).
     * If there is no attachment at that position, there will be an error thrown.
     *
     * @param position the index of the attachment to remove
     */
    removeAttachment(position: number): IMessageBuilder;

    /**
     * Sets the user who is editing this message.
     * This is required if you are modifying an existing message.
     *
     * @param user the editor
     */
    setEditor(user: IUser): IMessageBuilder;

    /**
     * Gets the user who edited the message
     */
    getEditor(): IUser;

    /**
     * Sets whether this message can group with others.
     * This is desirable if you want to avoid confusion with other integrations.
     *
     * @param groupable whether this message can group with others
     */
    setGroupable(groupable: boolean): IMessageBuilder;

    /**
     * Gets whether this message can group with others.
     */
    getGroupable(): boolean;

    /**
     * Gets the resulting message that has been built up to the point of calling it.
     *
     * *Note:* This will error out if the Room has not been defined.
     */
    getMessage(): IMessage;
}
