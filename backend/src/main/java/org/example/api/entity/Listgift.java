package org.example.api.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "listgift")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Listgift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gift_id")
    private Long giftId;

    @Column(name = "gift_name")
    private String giftName;

    @Column(name = "gift_img")
    private String giftImg;

    @Column(name = "gift_price")
    private double giftPrice;

    @OneToMany
    @JsonIgnore
    private List<Historygift> historyGifts;
}
