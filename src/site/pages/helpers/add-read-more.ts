import { TopicData } from '../../../green-lib/components/topic/topic'

export interface AddReadMore {
  topic: TopicData
  url?: string
}

export const addReadMore = ({ topic, url }: AddReadMore) => {
  const action = {
    heading: 'Bekijk opdracht',
    url,
  }

  topic.action = action
}
