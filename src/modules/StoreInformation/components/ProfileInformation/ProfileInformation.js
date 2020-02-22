import React from 'react'
import { Avatar, Button } from 'components'
import { Lang } from 'constants/language'
import './ProfileInformation.scss'
import EditProfileModal from '../EditProfileModal/EditProfileModal'

export default class ProfileInformation extends React.Component {
  state = {
    openModal: false,
  }

  renderInfoText = (leftText, rightText) => (
    <React.Fragment>
      <div className="col-5">
        <p className="text gray">{`${leftText}:`}</p>
      </div>
      <div className="col-7">
        <p className="text black">{rightText}</p>
      </div>
    </React.Fragment>
  )

  render() {
    const {
      data: { name, address, phone, companyName, companyAddress, mst, srcImg },
    } = this.props
    const { openModal } = this.state

    return (
      <div className="panel">
        <Avatar src={srcImg} />
        <div className="show-info">
          <h4 className="title-info mt-2 mb-1">{Lang.storeInfo.toUpperCase()}</h4>
          <div className="row">
            {this.renderInfoText(Lang.name, name)}
            {this.renderInfoText(Lang.address, address)}
            {this.renderInfoText(Lang.phone, phone)}
          </div>

          <h4 className="title-info mt-2 mt-2 mb-1">{Lang.redInvoiceInfo.toUpperCase()}</h4>
          <div className="row">
            {this.renderInfoText(Lang.companyName, companyName)}
            {this.renderInfoText(Lang.address, companyAddress)}
            {this.renderInfoText(Lang.mst, mst)}
          </div>

          <Button
            size="big"
            color="gray1"
            className="mt-1"
            onClick={() => this.setState({ openModal: true })}
            textColor="black"
            label={Lang.editProfile}
          />
        </div>
        <EditProfileModal isActive={openModal} onCloseModal={() => this.setState({ openModal: false })} />
      </div>
    )
  }
}
