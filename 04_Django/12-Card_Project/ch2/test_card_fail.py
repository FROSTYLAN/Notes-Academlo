from cards import Card
import pytest

def assert_identical(c1, c2):
    __tracebackhide__ = True
    if c1 != c2:
        pytest.fail("Las tarjetas no coinciden")

def test_equality_fail():
    c1 = Card("something", "brian", "todo", 123)
    c2 = Card("something else", "oken", "todo", 123)
    assert_identical(c1, c2)