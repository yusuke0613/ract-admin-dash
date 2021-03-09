import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value1, setValue1] = React.useState("q1");
  const [value2, setValue2] = React.useState("q2");
  const [value3, setValue3] = React.useState("q3");

  const handleChangeq1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1((event.target as HTMLInputElement).value);
  };

  const handleChangeq2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value);
  };

  const handleChangeq3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Q1. 現在利用の携帯電話会社はどちらですか？
      </FormLabel>
      <RadioGroup
        aria-label="q1"
        name="q1"
        value={value1}
        onChange={handleChangeq1}
      >
        <FormControlLabel value="1" control={<Radio />} label="SB/YM" />
        <FormControlLabel value="2" control={<Radio />} label="docomo" />
        <FormControlLabel value="3" control={<Radio />} label="au/UQ" />
        <FormControlLabel value="4" control={<Radio />} label="その他" />
      </RadioGroup>

      <FormLabel component="legend">Q2. 新プランへの変更予定は？</FormLabel>
      <RadioGroup
        aria-label="q2"
        name="q2"
        value={value2}
        onChange={handleChangeq2}
      >
        <FormControlLabel value="1" control={<Radio />} label="ある" />
        <FormControlLabel value="2" control={<Radio />} label="ない" />
        <FormControlLabel value="3" control={<Radio />} label="検討中" />
        <FormControlLabel value="4" control={<Radio />} label="-" />
      </RadioGroup>

      <FormLabel component="legend">Q3. 現在ご利用料金は？</FormLabel>
      <RadioGroup
        aria-label="q3"
        name="q3"
        value={value3}
        onChange={handleChangeq3}
      >
        <FormControlLabel value="1" control={<Radio />} label="3,000円以下" />
        <FormControlLabel value="2" control={<Radio />} label="5,000円以下" />
        <FormControlLabel value="3" control={<Radio />} label="7,000円以下" />
        <FormControlLabel value="4" control={<Radio />} label="10,000円以下" />
        <FormControlLabel value="5" control={<Radio />} label="10,000円以上" />
      </RadioGroup>
    </FormControl>
  );
}
