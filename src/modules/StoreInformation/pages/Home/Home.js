import React from 'react'
import { connect } from 'react-redux'
import { getData } from 'actions'
import { ProfileInformation, DeliveryMessage } from 'modules/StoreInformation/components'

class Home extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { data } = this.props

    return (
      <div className="pt-3 pb-3">
        <h2 className="title-page">Store Information</h2>
        <div className="row mt-2">
          <div className="col-md-4">
            <ProfileInformation data={data} />
          </div>
          <div className="col-md-8">
            <DeliveryMessage />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ temp }) => {
  const { data } = temp

  return {
    data,
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Home)
