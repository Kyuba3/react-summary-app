import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';


const TableForm = ({action, actionText, ...props}) => {

    const [status, setStatus] = useState(props.status || "");
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || 0);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount || 0);
    const [bill, setBill] = useState(props.bill || 0);
    const id = props.id;

    const {register, handleSubmit: validate, formState: {errors}} = useForm();
    const [statusError, setStatusError] = useState(false);

    if (peopleAmount > maxPeopleAmount && maxPeopleAmount > 0){
        setPeopleAmount(maxPeopleAmount);
    }

    const handleSubmit = e => {
        setStatusError(!status);
        if (status){
            action({status, peopleAmount, maxPeopleAmount, bill, id});
        }
    }

    return (
        <Form className="col-12 mx-5" onSubmit={validate(handleSubmit)}>
            <Form.Group>
                <Form.Label>
                    <strong>Status: </strong>
                </Form.Label>
                <Form.Select
                  {...register("status", {required: true})}
                  as="select"
                  placeholder="select a status"
                  value={status}
                  onChange = {e => setStatus(e.target.value)}
                />
                {statusError && <small>This field is required</small>}
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <strong>People: </strong>
                </Form.Label>
                <Form.Control 
                    {...register("peopleAmount", {required: true, min: 0, max: 10,})}
                    as="input"
                    value={peopleAmount}
                    onChange={e => setPeopleAmount(e.target.value)}
                />
                {errors.peopleAmount && <small>This field is required</small>}
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <strong>Bill: </strong>
                </Form.Label>
                <Form.Control 
                    {...register("bill", {required: true})}
                    as="input"
                    value={bill}
                    onChange={e => setBill(e.target.value)}
                />
                {errors.bill && <small>This field is required</small>}
                <Form.Control 
                    {...register("maxPeopleAmount", {required: true, min: 0, max: 10,})}
                    value={maxPeopleAmount}
                    onChange={e => setMaxPeopleAmount(e.target.value)}
                />
                {errors.maxPeopleAmount && <small>This field is required</small>}
            </Form.Group>
        </Form>
    )

}

export default TableForm;