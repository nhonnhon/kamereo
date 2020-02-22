import React from 'react'
import { Input, Button, Checkbox } from 'components'
import { Lang } from 'constants/language'

export default class DeliveryMessage extends React.Component {
  state = {
    deliveryMessageId: [
      {
        text: 'Lorem ipsum is dolor assets',
        checked: true,
      },
      {
        text: '',
        checked: false,
      },
      {
        text: '',
        checked: false,
      },
      {
        text: '',
        checked: false,
      },
      {
        text: '',
        checked: false,
      },
    ],
  }

  onChangeCheckbox = (index, checked) => {
    const { deliveryMessageId } = this.state
    deliveryMessageId[index].checked = !checked

    this.setState({
      deliveryMessageId,
    })
  }

  onChangeInput = (index, value) => {
    const { deliveryMessageId } = this.state
    deliveryMessageId[index].text = value

    this.setState({
      deliveryMessageId,
    })
  }

  renderInputMessage = ({ text, checked }, index) => (
    <div className="d-flex mt-1" key={index}>
      <Checkbox className="mr-1" checked={checked} onCheck={() => this.onChangeCheckbox(index, checked)} />
      <Input
        id={index}
        value={text}
        type="text"
        className="flex1"
        onChangeId={this.onChangeInput}
        placeholder={Lang.writeYourMessage}
      />
    </div>
  )

  render() {
    const { deliveryMessageId } = this.state

    return (
      <div className="panel delivery-message">
        <p className="text black uppercase">{Lang.deliveryMessage}</p>
        {deliveryMessageId.map((item, index) => this.renderInputMessage(item, index))}
        <Button
          size="small"
          color="gray1"
          className="mt-2"
          onClick={() => {}}
          textColor="black"
          label={Lang.update}
        />
      </div>
    )
  }
}
