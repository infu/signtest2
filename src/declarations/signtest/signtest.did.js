export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
