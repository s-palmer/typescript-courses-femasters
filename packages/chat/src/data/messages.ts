import { apiCall } from '../utils/networking'
import type { IMessage } from '../types'

const cachedMessageRecordArrays = {}

export async function getChannelMessages(teamId: string, channelId: string): Promise<IMessage[]> {
  let cached = cachedMessageRecordArrays[channelId]
  if (typeof cached === 'undefined')
    cached = cachedMessageRecordArrays[channelId] = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    )
  return await cached
}
