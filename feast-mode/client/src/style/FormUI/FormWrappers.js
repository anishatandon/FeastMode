import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 49rem;
  margin: 0 auto;
  border-radius: 0.7rem;
  padding: 6rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);

  border: 1px solid var(--color-border);
  box-shadow: 
    0 1px 5px var(--shadowOne),
    0 10px 0 -5px var(--shadowTwo);
`

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: var(--color-title);
`

export const AlignedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div { width: 48% };
`