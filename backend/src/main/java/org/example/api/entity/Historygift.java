package org.example.api.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "historygift")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Historygift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hg_id")
    private Long hgId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gift_id", nullable = false)
    @JsonBackReference
    private Listgift gift;

    @Column(name = "create_at")
    private Date createAt;
}
