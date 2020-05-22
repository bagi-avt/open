import { DatePicker } from "antd";
import React from "react";
import "./Calendar.css";
class DateRange extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    disabledStartDate = (startValue) => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = (endValue) => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = (value) => {
        this.onChange("startValue", value);
    };

    onEndChange = (value) => {
        this.onChange("endValue", value);
    };

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = (open) => {
        this.setState({ endOpen: open });
    };

    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <div>
                <div className="start-date">
                    <p>Начало периода:</p>
                    <DatePicker
                        disabledDate={this.disabledStartDate}
                        format="DD-MM-YYYY"
                        value={startValue}
                        placeholder="Start"
                        onChange={this.onStartChange}
                        onOpenChange={this.handleStartOpenChange}
                    />
                </div>
                <div className="end-date">
                    <p>Конец периода:</p>
                    <DatePicker
                        disabledDate={this.disabledEndDate}
                        format="DD-MM-YYYY"
                        value={endValue}
                        placeholder="End"
                        onChange={this.onEndChange}
                        open={endOpen}
                        onOpenChange={this.handleEndOpenChange}
                    />
                </div>
            </div>
        );
    }
}

export default DateRange;
