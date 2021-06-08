import { Fragment } from 'react'

import Loading from '@/src/components/loading'
import NoResults from '@/src/components/noresults'

const Loader = ({ source, loading, component, blank, template }) => {

  const noresults = typeof blank === 'boolean' ? blank : true

  if (loading)
    return <Loading />

  if (!source || source === undefined)
    return null

  if (Array.isArray(source)) {

    if (source.length) {

      return (
        <Fragment>
          {source.map((item, index) => (
            component(item, index)
          ))}
        </Fragment>
      )
    }

  } else if (source instanceof Object) {

    if (Object.values(source).indexOf(null))
      return component(source)
  }

  if (noresults)
    return <NoResults />

  else {

    if (template) {

      return template()
    }

    return null
  }

}

export default Loader
