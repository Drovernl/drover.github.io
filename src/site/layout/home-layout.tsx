import { EleventyData } from '../../_data/eleventy-data-types'
import { Topic } from '../../green-lib/components/topic/topic'
import { BaseLayout } from './base-layout'

export interface HomeLayout {
  children: React.ReactNode
}

export const HomeLayout = (props: HomeLayout & EleventyData) => {
  return (
    <BaseLayout {...props}>
      <div className="markdown">
        <div className="home-layout">
          <Topic variant="hero" swapImage={true} topic={props.openerTopic || {}} />
          <div className="home-logo">
            <img src="/site/layout/logos/logo-wit.png" alt="Drover Logo" />
            <h1>
              doen <b>logisch</b> maken
            </h1>
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
      <div className="s-wrapper">
        <article className="markdown s-flex-column u-gap-0">{props.children}</article>
      </div>
    </BaseLayout>
  )
}
