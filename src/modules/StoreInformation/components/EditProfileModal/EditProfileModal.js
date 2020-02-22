import React from 'react'
import { Avatar, Button, Modal, Input, Dropdown } from 'components'
import { Lang } from 'constants/language'
import { Alert } from 'actions/common'
import { postData } from 'actions'
import { connect } from 'react-redux'
import Validation from 'services/validation'
import './EditProfileModal.scss'

const cities = [
  {
    label: 'City 1',
    value: 'city 1',
  },
  {
    label: 'City 2',
    value: 'city 2',
  },
  {
    label: 'City 3',
    value: 'city 3',
  },
]

const districts = [
  {
    label: 'District 1',
    value: 'district 1',
  },
  {
    label: 'District 2',
    value: 'district 2',
  },
  {
    label: 'District 3',
    value: 'district 3',
  },
]

class EditProfileModal extends React.Component {
  constructor(props) {
    super(props)

    const { data } = props

    this.state = {
      ...data,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.data,
    })
  }

  onChangeInput = (id, value) => {
    this.setState({
      [id]: value,
    })
  }

  openImagePicker = () => {
    this.documentImgInput.click()
  }

  handleFileUpload(e) {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = e => {
      this.onChangeInput('srcImg', e.target.result)
    }

    reader.readAsDataURL(file)
  }

  removeFileUpload = () => {
    this.documentImgInput.value = ''
    this.onChangeInput('srcImg', '')
  }

  saveData = () => {
    const { phone } = this.state

    const validateSources = [
      {
        checker: Validation.checkers.phone,
        value: phone,
      },
    ]

    const invalidateInfo = Validation.getInvalidValidationFrom(validateSources)

    if (invalidateInfo) {
      Alert(invalidateInfo.title, invalidateInfo.message, [{ text: Lang.ok }])
    } else {
      this.props.postData({ ...this.state })
      this.props.onCloseModal()
    }
  }

  render() {
    const { isActive, onCloseModal } = this.props
    const {
      name,
      address,
      district,
      city,
      phone,
      companyName,
      companyAddress,
      companyDistrict,
      companyCity,
      mst,
      srcImg,
    } = this.state

    return (
      <Modal isActive={isActive}>
        <div className="edit-profile">
          <h2 className="title-page mb-2">{Lang.editProfile}</h2>
          <div className="row">
            <div className="col-4">
              <Avatar src={srcImg} />
              <div className="d-flex justify-content-around">
                <Button
                  className="mt-2"
                  onClick={this.removeFileUpload}
                  textColor="black"
                  color="transparent"
                  label={Lang.remove}
                />
                <Button
                  color="gray1"
                  className="mt-2"
                  textColor="black"
                  label={Lang.uploadImage}
                  onClick={this.openImagePicker}
                />
                <input
                  ref={el => (this.documentImgInput = el)}
                  onChange={e => this.handleFileUpload(e)}
                  className="hidden"
                  id="document-img"
                  name="document-img"
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                />
              </div>
            </div>
            <div className="col-8">
              <h4 className="mb-2">{Lang.basicInfo.toUpperCase()}</h4>
              <Input
                id="name"
                value={name}
                type="text"
                className="flex1 mb-2"
                onChangeId={this.onChangeInput}
                placeholder={Lang.storeName}
                label={Lang.storeName}
              />
              <Input
                id="phone"
                value={phone}
                type="text"
                className="flex1 mb-2"
                onChangeId={this.onChangeInput}
                placeholder={Lang.phone}
                label={Lang.phone}
              />
              <div className="row mb-2 align-items-end">
                <div className="col-6">
                  <Input
                    id="address"
                    value={address}
                    type="text"
                    className="flex1"
                    onChangeId={this.onChangeInput}
                    placeholder={Lang.address}
                    label={Lang.storeAddress}
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    id="district"
                    label={''}
                    placeholder={Lang.district}
                    onChange={({ value }) => this.onChangeInput('district', value)}
                    options={districts}
                    value={district}
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    id="city"
                    label={''}
                    placeholder={Lang.city}
                    onChange={({ value }) => this.onChangeInput('city', value)}
                    options={cities}
                    value={city}
                  />
                </div>
              </div>
              <h4 className="mb-2">{Lang.redInvoiceInfo.toUpperCase()}</h4>
              <Input
                id="companyName"
                value={companyName}
                type="text"
                className="flex1 mb-2"
                onChangeId={this.onChangeInput}
                placeholder={Lang.companyName}
                label={Lang.companyName}
              />
              <div className="row mb-2 align-items-end">
                <div className="col-6">
                  <Input
                    id="companyAddress"
                    value={companyAddress}
                    type="text"
                    className="flex1"
                    onChangeId={this.onChangeInput}
                    placeholder={Lang.address}
                    label={Lang.companyAddress}
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    id="companyDistrict"
                    label={''}
                    placeholder={Lang.district}
                    onChange={({ value }) => this.onChangeInput('companyDistrict', value)}
                    options={districts}
                    value={companyDistrict}
                  />
                </div>
                <div className="col-3">
                  <Dropdown
                    id="companyCity"
                    label={''}
                    placeholder={Lang.city}
                    onChange={({ value }) => this.onChangeInput('companyCity', value)}
                    options={cities}
                    value={companyCity}
                  />
                </div>
              </div>
              <Input
                id="mst"
                value={mst}
                type="text"
                className="flex1 mb-2"
                onChangeId={this.onChangeInput}
                placeholder={Lang.mst}
                label={Lang.mst}
              />
              <div className="">
                <Button
                  color="green"
                  size="big"
                  className="mt-2"
                  onClick={this.saveData}
                  textColor="white"
                  label={Lang.save}
                />
                <Button
                  size="big"
                  color="transparent"
                  onClick={onCloseModal}
                  textColor="black"
                  label={Lang.cancel}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
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
  { postData }
)(EditProfileModal)
