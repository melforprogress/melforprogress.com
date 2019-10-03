import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { localizedStringsKeypaths } from "../translations/es";
import { oneLine } from "../translations/stringFileUtils";
import { Title } from "./sharedUI"

const DonationAmounts = [5, 10, 15, 25, 100];

const DonatePicker = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAmount: DonationAmounts[3],
    }
  }


  render() {
    return (
      <>
        <Title>
          <FormattedMessage
            id={localizedStringsKeypaths.donate.header}
            defaultMessage="A Grassroots Campaign"
          />
        </Title>
        <p><FormattedMessage
          id={localizedStringsKeypaths.donate.description}
          defaultMessage={oneLine(`Mel is not accepting donations from corporate PACs, real estate developers, or the
            fossil fuel industry, so as a congressman he will answer to his neighbors, not to special interest groups.`)}
        /></p>
        <div>
          {DonationAmounts.map(amount =>
            <Select
              key={amount}
              amount={amount}
              isSelected={this.state.selectedAmount === amount}
              onClick={() => this.setState({selectedAmount: amount})}
            />
          )}
        </div>
        <OutboundLink
          className=""
          href={`https://secure.actblue.com/donate/melforprogress?amount=${this.state.selectedAmount}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id={localizedStringsKeypaths.donate.link}
            defaultMessage="Donate"
          />
        </OutboundLink>
      </>
    )
  }
}

const Select = ({ amount, isSelected, ...props }) =>
  <div {...props} style={{background: isSelected ? 'blue' : 'red'}}>${amount}</div>

Select.propTypes = {
                  amount: PropTypes.number,
  isSelected: PropTypes.bool,
};

export default DonatePicker;
