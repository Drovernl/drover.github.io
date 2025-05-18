import { EleventyData } from '../../_data/eleventy-data-types'
import { Topic } from '../../green-lib/components/topic/topic'
import { BaseLayout } from './base-layout'

export interface PageLayout {
  children: React.ReactNode
}

export const PageLayout = (props: PageLayout & EleventyData) => {
  return (
    <BaseLayout {...props}>
      <div className="markdown">
        <div className="page-layout">
          <Topic variant="hero" swapImage={true} topic={props.openerTopic || {}} />
        </div>
      </div>
      {/* @ts-ignore */}
      <div className="s-wrapper">
        <article className="markdown s-flex-column u-gap-0">{props.children}</article>
      </div>
      <div className="s-wrapper markdown">
        <hr />
        <h2>Footer</h2>
      </div>
    </BaseLayout>
  )
}
