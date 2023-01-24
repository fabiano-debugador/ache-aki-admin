import { renderHook } from "@testing-library/react-hooks";
import { waitFor, act } from "@testing-library/react";

import { AuthProvider } from ".";
import { useAuth } from "./useAuth";

describe('Testing authentication', () => {
  test('Testing log in', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    
    await waitFor(() => result.current.authenticate('fabiano@mail.com', "123"));

    expect(result.current.token).not.toBeUndefined()
  });

  test('Testing log out', async() => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await waitFor(() => result.current.logout());

    expect(localStorage.getItem('user')).toBe("null"); 
  })
})