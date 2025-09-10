package it.kedos.progetto.domain;

import static it.kedos.progetto.domain.CustomerTestSamples.*;
import static it.kedos.progetto.domain.OrderTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import it.kedos.progetto.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class OrderTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Order.class);
        Order order1 = getOrderSample1();
        Order order2 = new Order();
        assertThat(order1).isNotEqualTo(order2);

        order2.setId(order1.getId());
        assertThat(order1).isEqualTo(order2);

        order2 = getOrderSample2();
        assertThat(order1).isNotEqualTo(order2);
    }

    @Test
    void customerTest() {
        Order order = getOrderRandomSampleGenerator();
        Customer customerBack = getCustomerRandomSampleGenerator();

        order.setCustomer(customerBack);
        assertThat(order.getCustomer()).isEqualTo(customerBack);

        order.customer(null);
        assertThat(order.getCustomer()).isNull();
    }
}
